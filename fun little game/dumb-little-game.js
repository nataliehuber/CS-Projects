var start = new Date().getTime();

            function getRandomColor() {

                var letters = '0123456789ABCDEF'.split('');

                var color = '#';

                for (var i = 0; i < 6; i++ ) {

                    color += letters[Math.floor(Math.random() * 16)];

                }

                return color;

            }

            function makeShapeAppear() {

                var top = Math.random() * 400;

                var left = Math.random() * 400;

                var width = (Math.random() * 200) + 100;

                var height = (Math.random() * 200) + 100;

                var r = Math.random();

                if (r <= 0.5) {
                    document.getElementById("shape").className = "rectangle";
                }
                else {

                    document.getElementById("shape").className = "oval"; //square

                }

                document.getElementById("shape").style.backgroundColor = getRandomColor();

                document.getElementById("shape").style.width = width + "px";

                document.getElementById("shape").style.height = height + "px";

                document.getElementById("shape").style.top = top + "px";

                document.getElementById("shape").style.left = left + "px";

                document.getElementById("shape").style.display = "block";

                start = new Date().getTime();

            }

            function appearAfterDelay() {

                setTimeout(makeShapeAppear, Math.random() * 2000);

            }

            appearAfterDelay();

            document.getElementById("shape").onclick = function() {

                document.getElementById("shape").style.display = "none";

                var end = new Date().getTime();

                var timeTaken = (end - start) / 1000;

                document.getElementById("timeTaken").innerHTML = timeTaken + "s";

                appearAfterDelay();

            }
