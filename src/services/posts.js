/* eslint-disable class-methods-use-this */
import PostModel from '../models/post';

class PostsService {
  add({ createdBy, body }) {
    // TODO: validate
    return PostModel.create({ createdBy, body });
  }

  find(query = {}, options) {
    return PostModel.findByQuery(query, options);
  }

  findByUserId(_id, options) {
    return PostModel.findByUserId(_id, options);
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
