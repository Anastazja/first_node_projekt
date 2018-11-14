const userEntity = (id, name, desc, age) => {
    return {
        id,
        name: name,
        description: desc,
        age: age
    }
};

module.exports = userEntity;
