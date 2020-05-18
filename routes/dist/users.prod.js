"use strict";var express=require("express"),router=express.Router(),passport=require("../authentication"),bcrypt=require("bcrypt"),Users=require("../db").Users;router.get("/login",function(e,r){var o=e.flash("error");r.render("login",{message:o})}),router.post("/login",passport.authenticate("local",{failureRedirect:"/users/login",failureFlash:!0}),function(e,r){return r.redirect("/lobby")}),router.get("/logout",function(e,r){e.logout(),r.redirect("/")}),router.get("/signup",function(e,r){r.render("signup",{message:[]})}),router.post("/signup",function(r,o){var e=r.body,t=e.username,n=e.password;bcrypt.hash(n,10).then(function(e){return Users.createUser(t,e)}).then(function(e){r.login({id:e.id},function(e){null!=e?(console.log(e),o.render("login",{message:["An error occurred when trying to log you in."]})):o.redirect("/lobby")})}).catch(function(e){console.log(e),o.render("signup",{message:["Something bad happened."+e]})})}),module.exports=router;