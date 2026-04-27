# 🚀 Proyecto Soroban API - Smart Contract + API REST

## 📌 Descripción

Este proyecto implementa un **Smart Contract en Soroban (Stellar)** que permite realizar operaciones matemáticas básicas como:

- Suma
- Multiplicación
- Potencia

Además, se desarrolló una **API REST con Node.js (Express)** que permite consumir el contrato inteligente mediante endpoints HTTP.

---

## 🧱 Arquitectura del Proyecto




---

## ⚙️ Tecnologías Utilizadas

- Rust (Smart Contracts)
- Soroban SDK
- Stellar Testnet
- Node.js
- Express.js
- CLI Soroban / Stellar

---
1. Clonar repositorio
git clone https://github.com/angelantoniolopezperez864-cyber/soroban-api-project.git
cd soroban-api-project


2. Compilar contrato
soroban contract build


3. Configurar red
stellar network add testnet \
--rpc-url https://soroban-testnet.stellar.org \
--network-passphrase "Test SDF Network ; September 2015"


4. Crear cuenta
stellar keys generate usuario
stellar keys fund usuario --network testnet


5. Desplegar contrato
soroban contract deploy \
--wasm target/wasm32v1-none/release/hello_world.wasm \
--source usuario \
--network testnet


Contrato desplegado:
CCS6E6FGOF26SORMBEVKYHBWZCDNA4G5DXVJZDRIQRT4K2SK6VNMZF3R



API REST
cd api_soroban
npm install
node index.js


Servidor:
http://localhost:3000


Endpoints
➕ Suma
GET /sumar?a=2&b=3


## 🧪 Funciones del Smart Contract

```rust
pub fn sumar(_env: Env, a: i32, b: i32) -> i32
pub fn multiplicar(_env: Env, a: i32, b: i32) -> i32
pub fn potencia(_env: Env, base: i32, exp: u32) -> i32








