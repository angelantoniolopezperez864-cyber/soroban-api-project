#![cfg(test)]

use super::*;
use soroban_sdk::Env;

#[test]
fn test_suma() {
    let env = Env::default();
    let contrato = MiContrato;

    let resultado = contrato.sumar(env, 2, 3);
    assert_eq!(resultado, 5);
}