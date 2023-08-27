const db = require("../db/dbConfig.js");

const getAllMembers = async() => {
  try {
    const allMembers = await db.any("SELECT * FROM members");
    return allMembers; 
  } catch (error) {
    return error;
  }
};

const getMember = async (id) => {
    try {
      const oneMember = await db.one("SELECT * FROM members WHERE id=$1", id);
      return oneMember;
    } catch (err) {
      return err;
    }
  };
  
  const newMember = async (member) => {
    try {
      const newMember = await db.one(
        "INSERT INTO members ( fav_song, member_name, member_location, first_letter_j, bio, years_active, member_photo) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
        [ member.fav_song, member.member_name, member.member_location, member.first_letter_j, member.bio, member.years_active, member.member_photo]
      );
      return newMember;
    } catch (err) {
      return err;
    }
  };
  
  const deleteMember = async (id) => {
    try {
      const deletedMember = await db.one(
        "DELETE FROM members WHERE id = $1 RETURNING *",
        id
      );
      return deletedMember;
    } catch (err) {
      return err;
    }
  };
  
  const updateMember = async (id, member) => {
    try {
      const updatedMember = await db.one(
        "UPDATE members SET fav_song=$1, member_name=$2, member_location=$3,  first_letter_j=$4, members_age=$5,  bio=$6,  years_active=$7, member_photo=$8 WHERE id =$9 RETURNING *",
        [member.fav_song, member.member_name, member.member_location, member.first_letter_j, member.members_age, member.bio, member.years_active, member.member_photo, id]
      );
      return updatedMember;
    } catch (err) {
      return err;
    }
  };
  module.exports = {
    getAllMembers,
    getMember,
    newMember,
    deleteMember,
    updateMember,
  };