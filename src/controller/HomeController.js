import db from '../models/index';
import {JSON} from "sequelize";

let getHomePage = async (req, res) => {
    try{
        let data = await db.User.findAll();
        console.log(data);
        return res.render('homepage.ejs', {
            data: JSON.stringdata
        })
    }catch (e){
        console.log(e)
    }

}

module.exports = {
    getHomePage: getHomePage,
}