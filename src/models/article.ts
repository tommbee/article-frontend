export class Article {
    private _url!: string;
    private _title!: string;
    private _publishedDate!: Date;
    private _createdAtDate!: Date;

    get url(): string {
        return this._url;
    }

    set url(newUrl: string) {
        this._url = newUrl;
    }

    get title(): string {
        return this._title;
    }

    set title(newTitle: string) {
        this._title = newTitle;
    }

    get publishedDate(): Date {
        return this._publishedDate;
    }

    set publishedDate(newDate: Date) {
        this._publishedDate = newDate;
    }

    get createdAtDate() {
        return this._createdAtDate;
    }

    set createdAtDate(newDate: Date) {
        this._createdAtDate = newDate;
    }
}
