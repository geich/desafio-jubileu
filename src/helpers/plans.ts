
export const calcPlanDiscount = (planTimeInMinutes: number, minutes: number, tax: number): number => {
    const taxWithAddition = tax * 0.1 + tax
    console.log(taxWithAddition)
    return minutes <= planTimeInMinutes ? 0 : (minutes - planTimeInMinutes) * taxWithAddition
}