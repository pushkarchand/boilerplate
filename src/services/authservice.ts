import jwt_decode from 'jwt-decode';
import {DecodedToken, ExchangeToken, Token} from '../models/token';

export function decodeToken(token: string= ''):Token{
    const tkn = token ? token : getToken();
    const decodedToken: unknown = jwt_decode(tkn);
    const dToken: DecodedToken = decodedToken as DecodedToken;
    return new Token(dToken);
}

export function getToken(): any{
    return localStorage.getItem('token');
}

export function setToken(token: string): void {
    localStorage.setItem('token', token);
  }

export function setExchangeToken(token: string): void {
    localStorage.setItem('exchangetoken', token);
  }

export function  getExchangeToken(): string {
  return localStorage.getItem('exchangetoken')|| '';
}   

export function logout(): void{
    localStorage.clear();
    sessionStorage.clear();
}

export function decodeExchangeToken(token: string = ''): ExchangeToken {
    const tkn = token ? token : getExchangeToken();
    const decodedToken: unknown = jwt_decode(tkn);
    const dToken: DecodedToken = decodedToken as DecodedToken;
    return new ExchangeToken(dToken);
  }