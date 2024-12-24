export interface IFakeDataType {
	analyticsSummaryData: IAnalyticsSummaryType[];
	targetSummaryData: IAnalyticsSummaryType[];
	properties: IProperty[];
}

export interface IAnalyticsSummaryType {
	name: string;
	brief?: string;
	amount: number;
	icon: JSX.Element;
}

export interface IProperty {
	name: string;
	location: string;
	price: string;
	salePrice: string;
	discount: number;
	size: string;
	owner: string;
	category: string;
	status: string;
}
