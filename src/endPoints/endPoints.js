const baseUrl = 'https://localhost:7288/api/';
const endPoints = {
    inventory: {
        listAll: `${baseUrl}inventory`,
        paginate: `${baseUrl}inventory/page`,
        byCategoryId: `${baseUrl}inventory/category`,
    },
    products: {
        base: `${baseUrl}product`,
    },
    categories: {
        base: `${baseUrl}category`,
        productsByCategory: `${baseUrl}category/products`,
    },
    costumers: {

    },
    orders: {

    },
    auth: {

    }
};

export default endPoints;