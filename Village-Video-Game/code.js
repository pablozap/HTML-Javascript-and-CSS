function random(min, max)
{
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

document.write(random(10, 20));