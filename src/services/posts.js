/* eslint-disable class-methods-use-this */
import PostModel from '../models/post';

class PostsService {
  add({ createdBy, body }) {
    // TODO: validate
    return PostModel.create({ createdBy, body });
  }

  get(skip, limit) {
    return PostModel.find({})
      .sort({ createdAt: -1 })
      .skip(skip || 0)
      .limit(limit || 0);
  }

  getPostsByUserId(_id, skip, limit) {
    // TODO: validate
    return PostModel.findPostByUserId({ _id, skip, limit });
  }

  remove(_id) {
    // TODO: validate
    return PostModel.remove({ _id });
  }

  update(postId, body) {
    // TODO: validate
    return PostModel.update({ _id: postId }, { $set: { body } });
  }
}

export default new PostsService();
