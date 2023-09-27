import axios from "axios"

const getCategories = async () => {
    try {
        const result = await axios.get(process.env.REACT_APP_STRAPI + `/api/categories?populate=*`);
        console.log(result.data.data);
        return result.data.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error; // rethrow the error to handle it elsewhere, if needed
    }
}


export default getCategories;