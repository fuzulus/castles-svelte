export default class Paginator {
    private static pages: (number|null)[] = [];

    public static generatePages(
        currentPage: number,
        pageCount: number,
        pageStep: number,
    ): (number|null)[] {
        Paginator.pages = [];
        
        if (pageCount < pageStep * 2 + 6) {
            Paginator.addPages(1, pageCount + 1);
		} else if (currentPage < pageStep * 2 + 2) {
            Paginator.addPages(1, pageStep * 2 + 4);
            Paginator.pages.push(null);
			Paginator.pages.push(pageCount);
		} else if (currentPage > pageCount - pageStep * 2) {
			Paginator.pages.push(1);
            Paginator.pages.push(null);
            Paginator.addPages(pageCount - pageStep * 2 - 2, pageCount + 1);
		} else {
			Paginator.pages.push(1);
            Paginator.pages.push(null);
            Paginator.addPages(currentPage - pageStep, currentPage + pageStep + 1);
            Paginator.pages.push(null);
			Paginator.pages.push(pageCount);
		}

        return Paginator.pages;
    }

    private static addPages(i: number, j: number) {
        for (let page = i; page < j; page++) {
            Paginator.pages.push(page);
        }
    }
}