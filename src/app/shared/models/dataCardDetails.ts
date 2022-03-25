export interface IDataCardDetails {
    code: string,
    mainIcon: string,
    tooltipValue: string,
    title: string,
    subtitle: string,
    content: Array<{
        icon: string,
        value: string,
        tooltipValue: string
    }>;
}