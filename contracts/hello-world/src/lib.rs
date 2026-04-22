#![no_std]
use soroban_sdk::{contract, contractimpl, Env};

#[contract]
pub struct MiContrato;

#[contractimpl]
impl MiContrato {

    pub fn sumar(_env: Env, a: i32, b: i32) -> i32 {
        a + b
    }

    pub fn multiplicar(_env: Env, a: i32, b: i32) -> i32 {
        a * b
    }

    // NUEVA FUNCIÓN
    pub fn potencia(_env: Env, base: i32, exp: u32) -> i32 {
        let mut resultado = 1;
        let mut i = 0;

        while i < exp {
            resultado *= base;
            i += 1;
        }

        resultado
    }
}

#[cfg(test)]
mod test {
    use super::*;
    use soroban_sdk::Env;

    #[test]
    fn test_suma() {
        let env = Env::default();
        let resultado = MiContrato::sumar(env, 2, 3);
        assert_eq!(resultado, 5);
    }

    #[test]
    fn test_potencia() {
        let env = Env::default();
        let resultado = MiContrato::potencia(env, 2, 3);
        assert_eq!(resultado, 8);
    }
}