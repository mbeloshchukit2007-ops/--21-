// --------------------------------------------------
// Частина 1: Перетворення типів даних
// --------------------------------------------------
console.log("--- Перевірка перетворення типів ---");

const res1 = "10" + 5;
console.log('"10" + 5:', res1, "(тип: " + typeof res1 + ")");

const res2 = "10" - 5;
console.log('"10" - 5:', res2, "(тип: " + typeof res2 + ")");

const res3 = "10" * "2";
console.log('"10" * "2":', res3, "(тип: " + typeof res3 + ")");

const res4 = 10 + true;
console.log('10 + true:', res4, "(тип: " + typeof res4 + ")");

const res5 = 10 + false;
console.log('10 + false:', res5, "(тип: " + typeof res5 + ")");

const res6 = Number("125 грн");
console.log('Number("125 грн"):', res6, "(тип: " + typeof res6 + ")");

const res7 = Number("");
console.log('Number(""):', res7, "(тип: " + typeof res7 + ")");

const res8 = Boolean("false");
console.log('Boolean("false"):', res8, "(тип: " + typeof res8 + ")");

const res9 = Boolean("");
console.log('Boolean(""):', res9, "(тип: " + typeof res9 + ")");


// --------------------------------------------------
// Частина 2: Розрахунок вартості замовлення та ПДВ
// --------------------------------------------------
console.log("\n--- Розрахунок замовлення та ПДВ ---");

// Ставка податку (20%)
const vatRate = 0.20;

// Список куплених товарів
const orderProducts = [
    { name: "Монітор 24 дюйми", price: 5400, count: 2 },
    { name: "Бездротова миша", price: 450, count: 3 },
    { name: "Килимок для миші", price: 280, count: 1 },
    { name: "USB-флешка 64GB", price: 320, count: 4 }
];

// Розрахунок вартості однієї позиції
function ItemCostCalculator(unitPrice, quantity) {
    return unitPrice * quantity;
}

// Загальний підрахунок вартості та масиву ПДВ
function OrderSumCalculator(productsList, taxRate) {
    let finalAmount = 0;
    const vatList = [];

    for (let product of productsList) {
        const itemSum = ItemCostCalculator(product.price, product.count);
        const vatAmount = itemSum * taxRate;

        finalAmount += itemSum + vatAmount;

        vatList.push({
            name: product.name,
            vat: vatAmount
        });
    }

    console.log("Загальна сума до сплати: " + finalAmount + " грн");
    console.log("Деталізація ПДВ по товарах:", vatList);

    return finalAmount;
}

// Запуск функції
OrderSumCalculator(orderProducts, vatRate);
