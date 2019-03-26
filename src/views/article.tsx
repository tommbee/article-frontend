import * as React from 'react';

export interface CounterDisplayProps {
    value: number;
    label: string;
}

export class CounterDisplay extends React.PureComponent<CounterDisplayProps> {
    render(): React.ReactNode {
        return (
            <div>
                The value of {this.props.label} is {this.props.value}
            </div>
        );
    }
}
