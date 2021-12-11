export const UPDATE_DATA = 'update_data';



export const updateData = payload => {
    return {
        type : UPDATE_DATA,
        payload
    };
};