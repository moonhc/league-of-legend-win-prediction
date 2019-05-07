const mongoose = require('mongoose');

const champSchema = new mongoose.Schema({
    _id: Number,
    name: {type: String, required: true, unique: true},
    items: [String],
    runes: [String]
})

champSchema.statics.findMapping = function () {
    return this.find({}, { name: 1, _id: 1}).sort({ _id: 1});
}

champSchema.statics.findItemByName = function (champName) {
    return this.findOne({ name: new RegExp(champName, 'i') }, { items: 1 });
}

champSchema.statics.findItemByID = function (champID) {
    return this.findOne({ _id: champID }, { items: 1 });
}

champSchema.statics.findRuneByName = function (champName) {
    return this.findOne({ name: new RegExp(champName, 'i') }, { runes: 1 });
}

champSchema.statics.findRuneByID = function (champID) {
    return this.findOne({ _id: champID }, { runes: 1 });
}



module.exports = mongoose.model('Champion', champSchema);
