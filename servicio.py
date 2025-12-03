from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

def validar_cedula(cedula):
    if len(cedula) != 11 or not cedula.isdigit():
        return False
    multiplicadores = [1,2,1,2,1,2,1,2,1,2]
    suma = 0
    for i in range(10):
        producto = int(cedula[i]) * multiplicadores[i]
        if producto >= 10:
            producto = (producto % 10) + (producto // 10)
        suma += producto
    digito_verificador = (10 - (suma % 10)) % 10
    return digito_verificador == int(cedula[10])

@app.route("/validar")
def validar():
    cedula = request.args.get("cedula")
    if not cedula:
        return jsonify({"error": "No se recibió la cédula"})
    valida = validar_cedula(cedula)
    return jsonify({"cedula": cedula, "valida": valida})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 10000)))
