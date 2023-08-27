const express = require("express");
const members = express.Router();
const {
    getAllMembers,
    getMember,
    newMember,
    deleteMember,
    updateMember,
  } = require("../queries/members.js");
  
  const {
    checkBoolean,
    checkMemberName,
    checkMemberLocation,
  } = require("../validations/checkMembers.js");


members.get("/", async  (req, res) => {
    const allMembers = await getAllMembers();
    console.log(allMembers)
    if (allMembers[0]) {
        res.status(200).json(allMembers);
    } else {
        res.status(500).json({ error: "server error" });
    }
});


members.get("/:id", async (req, res) => {
    const { id } = req.params;
    const member = await getMember(id);
    if (member.years_active) {
      res.json(member);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });
  
 
members.post("/", checkBoolean, checkMemberName, checkMemberLocation, async (req, res) => {
    try {
      const member = await newMember(req.body);
      res.status(200).json(member);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  });
  
  
members.put("/:id", checkBoolean, checkMemberName, checkMemberLocation, async (req, res) => {
    const { id } = req.params;
    const updatedMember = await updateMember(id, req.body);
    res.status(200).json(updatedMember);
  });
  
members.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedMember = await deleteMember(id);
    if (deletedMember.id) {
      res.status(200).json(deletedMember);
    } else {
      res.status(404).json("Band Member not found");
    }
  });
  

module.exports = members 