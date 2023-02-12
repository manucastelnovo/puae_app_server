import { Food } from "feature/food/domain/models/food"


export const foodFromPG = (item: any): Food => {
    return {
        id:item.id,
        userId: item.user_id,
        foodName: item.food_name,
        profit: item.profit,
        productionCost: item.production_cost,
        description:item.description,
        foodType:item.food_type,
        image:item.image,
    }
}