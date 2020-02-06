import request from '../utils/request'
export async function newArticle() {
  return request('/api/new_article')
}
