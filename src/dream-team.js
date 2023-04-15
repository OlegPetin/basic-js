const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // console.log(members);
  let res = '';
  if (Array.isArray(members) == true){
    members.forEach(item => {
      if(typeof item === 'string') {
        let mod = item.trimStart();
        res=res+mod[0].toLocaleUpperCase();
      }
    })
    return res.split('').sort().join('');
  } else {
    return false;
  }
 
}

module.exports = {
  createDreamTeam
};
