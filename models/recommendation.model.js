import mongoose from "mongoose";

const recommendationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  recommendations: [{
    courseName: {
      type: String,
      required: true
    },
    platform: {
      type: String,
      required: true
    },
    difficulty: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    relevance: {
      type: String,
      required: true
    },
    skillsGained: {
      type: [String],
      required: true
    }
  }],
  learningPathSuggestion: {
    type: String,
    required: true
  },
  additionalResources: {
    type: [String],
    required: true
  },
  careerInsight: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Recommendation = mongoose.model('Recommendation', recommendationSchema);

// module.exports = Recommendation;
export default Recommendation;