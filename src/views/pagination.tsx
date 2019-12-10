import * as React from 'react';
import * as Styles from './site-styles';

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
        return new Array(diff).fill(undefined).map((_, i) => i + 1);
    }
    getLongNumbers(): number[] {
        const start = (+this.props.page) + 1;
        return new Array(3).fill(undefined).map((_, i) => i + start);
    }
    render(): React.ReactNode {
        return (
            <ul style={Styles.pagination} className='pagination'>
                {this.props.page > 1 &&
                    <li style={Styles.paginationItem}><a href={`/page/${+this.props.page - +1}`} style={Styles.paginationLink}>&laquo;</a></li>
                }
                {this.getShortNumbers().map((pageNum) => {
                    return <li style={Styles.paginationItem}><a style={Styles.paginationLink} href={`/page/${pageNum}`}>{pageNum}</a></li>
                })}
                <li style={Styles.paginationItem}><a style={Styles.paginationItemActive}>{this.props.page}</a></li>
                {this.getLongNumbers().map((pageNum) => {
                    return <li style={Styles.paginationItem}><a style={Styles.paginationLink} href={`/page/${pageNum}`}>{pageNum}</a></li>
                })}
                <li style={Styles.paginationItem}><a href={`/page/${+this.props.page + +1}`} style={Styles.paginationLink}>&raquo;</a></li>
            </ul>
        );
    }
}

export { Pagination, PaginationProps }
