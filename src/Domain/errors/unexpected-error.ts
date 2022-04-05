export class UnexpectedError extends Error {
  constructor() {
    super('Algo de Errado aconteceu. Tente novamente em breve.');
    this.name = 'UnexpectedError';
  }
}
