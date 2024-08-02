import Recommendation from '../models/recommendation.model.js';

// Create a new recommendation
export const createRecommendation = async (req, res) => {
  try {
    const { userId, recommendations, learningPathSuggestion, additionalResources, careerInsight } = req.body;

    const newRecommendation = new Recommendation({
      userId,
      recommendations,
      learningPathSuggestion,
      additionalResources,
      careerInsight
    });

    const savedRecommendation = await newRecommendation.save();
    res.status(201).json(savedRecommendation);
  } catch (error) {
    res.status(500).json({ message: 'Error creating recommendation', error });
  }
};

// Get all recommendations
export const getRecommendations = async (req, res) => {
  try {
    const recommendations = await Recommendation.find().populate('userId');
    res.status(200).json(recommendations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recommendations', error });
  }
};

// Get a recommendation by ID
export const getRecommendationById = async (req, res) => {
  try {
    const { id } = req.params;
    const recommendation = await Recommendation.findById(id).populate('userId');
    if (!recommendation) {
      return res.status(404).json({ message: 'Recommendation not found' });
    }
    res.status(200).json(recommendation);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recommendation', error });
  }
};

// Update a recommendation
export const updateRecommendation = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedRecommendation = await Recommendation.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });
    if (!updatedRecommendation) {
      return res.status(404).json({ message: 'Recommendation not found' });
    }
    res.status(200).json(updatedRecommendation);
  } catch (error) {
    res.status(500).json({ message: 'Error updating recommendation', error });
  }
};

// Delete a recommendation
export const deleteRecommendation = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRecommendation = await Recommendation.findByIdAndDelete(id);
    if (!deletedRecommendation) {
      return res.status(404).json({ message: 'Recommendation not found' });
    }
    res.status(200).json({ message: 'Recommendation deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting recommendation', error });
  }
};
