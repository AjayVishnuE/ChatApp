const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        { username:username, secret:username,first_name:username },
        {headers: {"private-key":"25f552e8-6bc2-406a-bad4-c1a4f27d1648"}}
    )
    return res.status(r.status).json(r.data)
  } catch (e) {
    return res.status(e.response.status).json(e.response.data)

  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);