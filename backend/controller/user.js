const User = require("../model/user");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const register = async (req, res) => {
              try {
                            const { email, firstname, lastname, username, password, role } = req.body;


                            if (!email || !firstname || !lastname || !username || !password || !role) {
                                          res.status(400).json({
                                                        success: false,
                                                        message: 'All fields are required',
                                          });
                            }
                            const existingUser = await User.findOne({ email });
                            if (existingUser) {
                                          res.status(400).json({
                                                        success: false,
                                                        message: 'Email is already registered',
                                          });
                            }


                            const salt = await bcrypt.genSalt(10);
                            const hashedPassword = await bcrypt.hash(password, salt);


                            const user = new User({
                                          email,
                                          firstname,
                                          lastname,
                                          username,
                                          password: hashedPassword,
                                          role,
                            });


                            await newUser.save();


                            res.status(201).json({
                                          success: true,
                                          message: 'User registered successfully',
                                          user: user
                            });


              }
              catch (err) {
                            res.json({
                                          success: false,
                                          message: err.message
                            })
              }
}

const login = async (req, res) => {
              try {
                            const { email, password } = req.body;
                            const user = await User.findOne({ email });
                            if (!user) {
                                          return res.status(400).json({
                                                        success: false,
                                                        message: 'Email Not Found',
                                          });
                            }

                            const isMatch = await bcrypt.compare(password, user.password);
                            if (!isMatch) {
                                          return res.status(401).json({
                                                        success: false,
                                                        message: "Invalid credentials",
                                          });
                            }

                            const token = jwt.sign(
                                          { id: user._id, email: user.email, role: user.role },
                                          process.env.JWT_SECRET,
                                          { expiresIn: '1d' }
                            );

                            res.status(200).json({
                                          success: true,
                                          message: "Login successful",
                                          token: token,
                                          user: user
                            });
              }
              catch (err) {
                            res.json({
                                          success: false,
                                          message: err.message
                            })
              }
}

const getMe = async (req, res) => {
              try {
                            const authHeader = req.headers.authorization;
                            const token = authHeader.split(" ")[1];


                            const decoded = jwt.verify(token, process.env.SECRET_KEY);
                            const user = await User.findById(decoded.id);
                            if (!user) {
                                          res.json({
                                                        success: false,
                                                        message: "User does not found"
                                          })
                            }


                            return res.json({
                                          success: true,
                                          message: "User details here",
                                          user: user
                            })


              }
              catch (err) {
                            res.json({
                                          success: false,
                                          message: err.message
                            })
              }
}

module.exports = { register, login, getMe }
