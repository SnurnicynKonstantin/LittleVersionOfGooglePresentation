from flask import Blueprint

slides_api = Blueprint('slides_api', __name__)

@slides_api.route("/account")
def accountList():
    return "list of accounts"