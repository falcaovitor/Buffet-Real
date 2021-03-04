<html>
    <title>Enviando</title>
    <body>

    <?php
        $host = "127.0.0.1";
        $user = "root";
        $password = "";
        $database = "buffetReal";
        $conn = mysqli_connect($host, $user, $password, $database) or die("Banco de dados não encontrado");
    ?>
    <?php
        $nome = $_POST['nome'];
        $idade = $_POST['idade'];
        $email = $_POST['email'];
        $celular = $_POST['celular'];
        $pessoas = $_POST['pessoas'];
        $tempo = $_POST['data'];
        $eventos = $_POST['eventos'];
        $area = $_POST['observation'];


        $inserir = mysqli_query($conn, "INSERT INTO contatos(
                                                            nome,
                                                            idade,
                                                            email,
                                                            celular,
                                                            pessoas,
                                                            tempo,
                                                            eventos,
                                                            area
                                                            )VALUES(
                                                                '$nome',
                                                                '$idade',
                                                                '$email',
                                                                '$celular',
                                                                '$pessoas',
                                                                '$tempo',
                                                                '$eventos',
                                                                '$area'
                                                            );");
        echo "<script>alert('Informações cadastradas com sucesso!')</script>";
        echo "<script>location.href='../index.html'</script>";
    ?>
    </body>
</html>