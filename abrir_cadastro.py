from flask import Flask
import subprocess
import os

app = Flask(__name__)

@app.route("/abrir-cadastro")
def abrir_cadastro():
    caminho = os.path.join(os.path.dirname(__file__), "login", "sistema de login", "cadastro.py")
    print(f"Caminho do cadastro.py: {caminho}")

    if os.path.exists(caminho):
        subprocess.Popen(["python", caminho])
        return f"Janela de cadastro aberta! ({caminho})"
    else:
        return f"❌ Arquivo não encontrado: {caminho}", 404

if __name__ == "__main__":
    app.run(debug=True)

