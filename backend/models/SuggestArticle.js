const mongoose = require('mongoose');

const SuggestArticleSchema = new mongoose.Schema({
   
    title: {
        type: String
    },
    author: {
        type: String
    },
    year: {
        type: String
    },
    software_engineering_methodology: {
        type: String
    },
    claim:{
        type: String
    },
    strength_of_evidence: {
        type: String
    }

});

module.exports = SuggestArticle = mongoose.model('suggestArticle', SuggestArticleSchema);