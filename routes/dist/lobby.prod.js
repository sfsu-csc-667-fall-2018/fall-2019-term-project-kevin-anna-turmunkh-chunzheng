"use strict";var express=require("express"),router=express.Router(),ensureLoggedIn=require("connect-ensure-login").ensureLoggedIn;router.get("/",ensureLoggedIn("/users/login"),function(e,r){var o=e.user,u=e.query.error;r.render("lobby",{user:o,error:u})}),router.post("/create",ensureLoggedIn("/users/login"),function(e,r){var o=e.user,u=e.query.error;r.render("game",{user:o,error:u})}),router.post("/join",ensureLoggedIn("/users/login"),function(e,r){e.user}),module.exports=router;