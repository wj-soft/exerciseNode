var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

// 스키마의 정의
var NoticeSchema = new Schema({
  title: String, //제품명
  contents: String, //설명
  created_at: { //작성일
    type: Date,
    default: Date.now()
  }
});

// NoticeSchema.plugin(autoIncrement.plugin, { model: 'notices', field: 'pk', startAt: 1 });
module.exports = mongoose.model('notices', NoticeSchema);