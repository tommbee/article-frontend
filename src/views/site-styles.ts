import * as React from 'react';

const body: React.CSSProperties = {
    margin: 0,
    padding: 0,
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#F9F9F9'
}

const app: React.CSSProperties = {
    marginTop: -1,
    backgroundColor: '#FFFFFF',
    maxWidth: 650,
    marginLeft: 'auto',
    marginRight: 'auto',
    border: 'solid 1px #E2E2E2',
    padding: '0 70px'
}

const logo: React.CSSProperties = {
    height: 20,
    textAlign: 'left',
    fontFamily: 'DM Serif Display, serif',
    fontWeight: 500,
    marginTop: 30,
    marginBottom: 0,
    fontSize: 26,
    display: 'inline-block',
    lineHeight: '50px'
}

const pagination: React.CSSProperties = {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    marginBottom: 40,
    marginTop: 20,
}

const paginationItem: React.CSSProperties = {
    float: 'left',
    marginRight: 10,
}

const paginationLink: React.CSSProperties = {
    display: 'block',
    padding: 10,
    fontFamily: 'constantia, times new roman, serif',
    background: '#FFF',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '18px',
    lineHeight: '0.5em',
    color: '#333',
}

const paginationItemActive: React.CSSProperties = {
    display: 'block',
    padding: 10,
    fontFamily: 'constantia, times new roman, serif',
    background: '#EEE',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '18px',
    lineHeight: '0.5em',
    color: '#333',
}

const header: React.CSSProperties = {
    textAlign: 'left',
    position: 'relative'
}

const link: React.CSSProperties = {
    color: '#333333',
    display: 'block',
    fontFamily: 'constantia, times new roman, serif',
    textDecoration: 'none',
    fontSize: 15,
    padding: '8px 0',
    //fontWeight: 200,
    fontWeight: 'lighter',
    position: 'relative'
}

const border: React.CSSProperties = {
    width: 4,
    height: 85,
    display: 'none',
    backgroundColor: '#D8D8D8',
    position: 'absolute',
    right: 0,
    top: 0
}

const date: React.CSSProperties = {
    color: '#adacac',
    padding: '0 0 2px 0',
    display: 'block',
    fontFamily: 'constantia, palatino, times new roman',
    fontWeight: 'lighter',
    fontStyle: 'italic',
    fontSize: 12
}

const articleList: React.CSSProperties = {
    width: '100%',
    float: 'none'
}

const article: React.CSSProperties = {
    width: '50%',
    float: 'left'
}

export { app, logo, body, pagination, header, link, border, date, articleList, article, paginationItem, paginationLink, paginationItemActive };
