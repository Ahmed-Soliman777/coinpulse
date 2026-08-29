import DataTable from "../DataTable"

const trendingFallbackRows = Array.from({ length: 6 }, (_, index) => index)

export const CoinOverviewFallback = () => {
    return (
        <div id="coin-overview-fallback" aria-hidden="true">
            <div className="header pt-2">
                <div className="skeleton header-image" />

                <div className="info">
                    <div className="skeleton header-line-sm" />
                    <div className="skeleton header-line-lg" />
                </div>
            </div>

            <div className="chart">
                <div className="skeleton chart-skeleton" />
            </div>
        </div>
    )
}

export const TrendingCoinFallback = () => {
    const columns: DataTableColumn<number>[] = [
        {
            header: "Name",
            cellClassName: "name-cell",
            cell: () => (
                <div className="name-link">
                    <div className="skeleton name-image" />
                    <div className="skeleton name-line" />
                </div>
            ),
        },
        {
            header: "24h Change",
            cellClassName: "change-cell",
            cell: () => (
                <div className="price-change">
                    <div className="skeleton change-icon" />
                    <div className="skeleton change-line" />
                </div>
            ),
        },
        {
            header: "Price",
            cellClassName: "price-cell",
            cell: () => <div className="skeleton price-line" />,
        },
    ]

    return (
        <div id="trending-coins-fallback" aria-hidden="true">
            <h4>Trending Coins</h4>

            <DataTable
                data={trendingFallbackRows}
                columns={columns}
                rowKey={(row) => row}
                tableClassName="trending-coins-table"
                headerCellClassName="py-3"
                bodyCellClassName="py-2"
            />
        </div>
    )
}

const categoryFallbackRows = Array.from({ length: 10 }, (_, index) => index)

export const CategoryFallback = () => {
    const columns: DataTableColumn<number>[] = [
        {
            header: "Category",
            cellClassName: "category-cell",
            cell: () => <div className="skeleton category-skeleton" />,
        },
        {
            header: "Top Gainers",
            cellClassName: "top-gainers-cell",
            cell: () => (
                <div className="flex gap-1">
                    <div className="skeleton coin-skeleton" />
                    <div className="skeleton coin-skeleton" />
                    <div className="skeleton coin-skeleton" />
                </div>
            ),
        },
        {
            header: "24h Change",
            cellClassName: "change-header-cell",
            cell: () => (
                <div className="change-cell">
                    <div className="skeleton change-icon" />
                    <div className="skeleton value-skeleton-sm" />
                </div>
            ),
        },
        {
            header: "Market Cap",
            cellClassName: "market-cap-cell",
            cell: () => <div className="skeleton value-skeleton-md" />,
        },
        {
            header: "24h Volume",
            cellClassName: "volume-cell",
            cell: () => <div className="skeleton value-skeleton-lg" />,
        },
    ]

    return (
        <div id="categories-fallback" className="custom-scrollbar" aria-hidden="true">
            <h4>Top Categories</h4>

            <DataTable
                data={categoryFallbackRows}
                columns={columns}
                rowKey={(row) => row}
                tableClassName="mt-3"
            />
        </div>
    )
}