export default class NotFound extends Error {
  constructor() {
    super('The resource(s) could not be found.');
  }
}
