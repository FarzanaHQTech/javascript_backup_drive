<!--?php
/*
|--------------------------------------------------------------------------
| Welcome to Farzana's Creative Domain
|--------------------------------------------------------------------------
| "Every code has a story, every domain a dream. Welcome to a world where
| creativity meets the web."
|
| Written with ❤️ for Farzana
| © <?php echo date('Y'); ?>-->

<html lang="en">

<head></head>

<body>Farzana's Hosting.
    |--------------------------------------------------------------------------
    */




    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Farzana's creative digital space.">
    <title>Welcome, Farzana!</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(to bottom right, #6a11cb, #2575fc);
            color: #fff;
            text-align: center;
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }

        h1 {
            font-size: 4rem;
            animation: glow 2s infinite alternate;
        }

        p {
            font-size: 1.5rem;
            margin-top: 20px;
        }

        @keyframes glow {
            from {
                text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ff00ff, 0 0 40px #ff00ff, 0 0 50px #ff00ff;
            }

            to {
                text-shadow: 0 0 20px #fff, 0 0 30px #ff00ff, 0 0 40px #ff00ff, 0 0 50px #ff00ff, 0 0 60px #ff00ff;
            }
        }

        button {
            background: #fff;
            color: #2575fc;
            padding: 10px 20px;
            font-size: 1rem;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            margin-top: 30px;
            cursor: pointer;
            transition: background 0.3s, color 0.3s;
        }

        button:hover {
            background: #2575fc;
            color: #fff;
        }
    </style>


    <h1>Hello, Visitors! 😊 👋</h1>
    <p>"Welcome to your vibrant digital space—where creativity meets code."</p>
    <button onclick="alert('Thank you for visiting, Farzana! 😊')">Click Me!</button>


</body>

</html>