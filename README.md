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

## 🧪 Funciones del Smart Contract

```rust
pub fn sumar(_env: Env, a: i32, b: i32) -> i32
pub fn multiplicar(_env: Env, a: i32, b: i32) -> i32
pub fn potencia(_env: Env, base: i32, exp: u32) -> i32



1. Clonar repositorio
git clone https://github.com/angelantoniolopezperez864-cyber/soroban-api-project.git
cd soroban-api-project
