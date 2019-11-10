import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    body: 'String',
    createdBy: { type: 'ObjectId', ref: 'User' },
  },
  { timestamps: true },
);

PostSchema.statics.findByUserId = function findPostByUserId(userId, options) {
  return this.findByQuery({ createdBy: userId }, options);
};

PostSchema.statics.findByQuery = function findByQuery(query, options) {
  return this.find(query)
    .sort({ createdAt: -1 })
    .skip(options.offset)
    .limit(options.limit || 10);
};

const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;
