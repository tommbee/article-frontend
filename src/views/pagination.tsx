import * as React from 'react';

interface PaginationProps {
    page: number;
}

class Pagination extends React.PureComponent<PaginationProps> {
    constructor(props: PaginationProps) {
        super(props);
    }
    getShortNumbers(): number[] {
        if (this.props.page === 1) {
            return [];
        }
        const start = (+this.props.page) - 1;
        const diff = Math.abs(0 - start);
        console.log(diff);
        return new Array(diff).fill(undefined).map((_, i) => i + 1);
    }
    getLongNumbers(): number[] {
        const start = (+this.props.page) + 1;
        return new Array(3).fill(undefined).map((_, i) => i + start);
    }
    render(): React.ReactNode {
        return (
            <ul className='pagination'>
                {this.getShortNumbers().map((pageNum) => {
                    return <li><a href={`/page/${pageNum}`}>{pageNum}</a></li>
                })}
                <li><a>{this.props.page}</a></li>
                {this.getLongNumbers().map((pageNum) => {
                    return <li><a href={`/page/${pageNum}`}>{pageNum}</a></li>
                })}
            </ul>
        );
    }
}

export { Pagination, PaginationProps }
