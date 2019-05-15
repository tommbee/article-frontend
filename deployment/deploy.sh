#!/bin/bash

## gcloud login
gcloud auth activate-service-account --key-file=auth.json

## get kubeconfig
echo "Saving config to cache..."
mkdir -p site-config
echo $GCLOUD_SERVICE_KEY > ./site-config/auth.json
gsutil cp gs://article-app-storage/kubeconfig ./site-config/kubeconfig

## install helm
echo "Check Helm is installed..."
if [[ $((helm) 2>&1 | grep "command not found" ) ]]; then
    echo "Installing Helm"
    curl https://raw.githubusercontent.com/helm/helm/master/scripts/get > get_helm.sh
    chmod 700 get_helm.sh
    ./get_helm.sh
    helm init --upgrade --wait --kubeconfig ./site-config/kubeconfig
    helm repo add coreos https://s3-eu-west-1.amazonaws.com/coreos-charts/stable/
fi

## create namespace
echo "Creating app namespace..."
kubectl apply -f ./article-app-frontend/namespace.json --kubeconfig ./site-config/kubeconfig

## deploy helm chart
echo "Deploying helm chart..."
helm upgrade -i article-app-frontend ./article-app-frontend \
    --set image.repository=${DOCKER_IMAGE_URL} \
    --set image.tag=${CIRCLE_SHA1} --set port=${PORT} \
    --set apiTimeout=${API_TIMEOUT} \
    --namespace article-app \
    --kubeconfig ./site-config/kubeconfig
