import { Request, Response } from "express";
const db = require('../database/databaseConnection')
const bcrypt = require('bcrypt')

const signup = async (req: Request, res: Response) => {

    const hashPassword =await encrypt(req.body.password)
    const user = { 
        name:req.body.name, 
        email:req.body.email,
        password:hashPassword,
        cpassword:req.body.cpassword
     };
    const sql = "INSERT INTO user (name,email, password,cpassword) VALUES (?, ?,?,?)";

    db.query(sql, [user.name, user.email,user.password,user.cpassword], (err: any, result: any) => {
        if (err) {
            console.error("Error executing MySQL query:", err);
            res.status(500).json({ error: "An error occurred while signing up" });
            return;
        }
        res.status(201).json({ message: "Registration Success" });
    });

    async function encrypt(password: any){
        return bcrypt.hash(password,10);
    }
};

const login = (req: Request, res: Response) => {
    const { email, password } = req.body;
    const sql = "SELECT name FROM user WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err: any, result: string | any[]) => {
        if (err) {
            console.error("Error executing MySQL query:", err);
            res.status(500).json({ error: "An error occurred while logging in" });
            return;
        }
        if (result.length === 0) {
            res.status(401).json({ error: "Invalid username or password" });
            return;
        }
        res.status(200).json({ message: "Login Success", data: result[0] });
    });
};

export default { signup, login };