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
```


## DESARROLLO DEL PROYECTO
```
1. Clonar repositorio
git clone https://github.com/angelantoniolopezperez864-cyber/soroban-api-project.git
cd soroban-api-project
```


2. Compilar contrato
```
soroban contract build
```

3. Configurar red
```
stellar network add testnet \
--rpc-url https://soroban-testnet.stellar.org \
--network-passphrase "Test SDF Network ; September 2015"
```

4. Crear cuenta
```
stellar keys generate usuario
stellar keys fund usuario --network testnet
```

5. Desplegar contrato
```
soroban contract deploy \
--wasm target/wasm32v1-none/release/hello_world.wasm \
--source usuario \
--network testnet


Contrato desplegado:
CCS6E6FGOF26SORMBEVKYHBWZCDNA4G5DXVJZDRIQRT4K2SK6VNMZF3R
```
<img width="425" height="163" alt="image" src="https://github.com/user-attachments/assets/596591bc-e8de-4878-bb41-0a8fac3ec1f7" />




API REST
cd api_soroban
npm install
node index.js


Servidor:
http://localhost:3000


Endpoints
➕ Suma
GET /sumar?a=2&b=3



✖️ Multiplicación
GET /multiplicar?a=2&b=4
Respuesta:
{ "resultado": "8" }

<img width="425" height="126" alt="image" src="https://github.com/user-attachments/assets/04ce9c4b-b1b0-4636-9ff2-27e3b1614803" />




🔢 Potencia
GET /potencia?base=3&exp=2
Respuesta:
{ "resultado": "9" }

<img width="425" height="123" alt="image" src="https://github.com/user-attachments/assets/7c525202-6939-402c-9392-5c511d5dbd1b" />




Pruebas desde consola
curl "http://localhost:3000/potencia?base=3&exp=2"

6. Evidencia en Testnet

<img width="425" height="208" alt="image" src="https://github.com/user-attachments/assets/3e18f73e-a254-4c7f-ab8e-5d8cd7e1735c" />



7. Resultados
```
La API respondió correctamente a todas las solicitudes realizadas, logrando una integración funcional entre el backend y el contrato inteligente desplegado.
Se comprobó la correcta ejecución de las funciones mediante diferentes métodos de prueba.
```
8. Conclusiones
```
Se logró diseñar e implementar una API REST capaz de consumir un contrato inteligente en la red Stellar mediante Soroban. Esta práctica demuestra cómo integrar tecnologías tradicionales de desarrollo web con soluciones basadas en blockchain.
```
9. Referencias
```
Stellar Development Foundation. (2024). Soroban smart contracts overview. Recuperado de https://developers.stellar.org/docs/build/smart-contracts/overview
Stellar Development Foundation. (2024). Soroban CLI documentation. Recuperado de https://developers.stellar.org/docs/tools/soroban-cli
Stellar Development Foundation. (2024). Stellar Laboratory (Testnet). Recuperado de https://lab.stellar.org
Stellar Development Foundation. (2024). Stellar Expert Explorer. Recuperado de https://stellar.expert
<img width="442" height="497" alt="image" src="https://github.com/user-attachments/assets/dd0d3a49-42f3-494d-b039-4fc0827ae3c0" />









