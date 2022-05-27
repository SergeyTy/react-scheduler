const pre = new Map([
    ["h_anim", "Щеглов Максим Евгеньевич"],
    ["sh_1", "Шыырап Юрий Монгушевич"],
    ["sh_2", "Шыырап Мерген Юрьевич"],
    ["3d1", "Хохлов Петр Владимирович"],
    ["3d2", "Хохлова Валентина Николаевна"],
    ["ps0", "Малахова Екатерина Дмитриевна"],
    ["ski", "Скибина Ольга Валентиновна"],
    ["oia", "Оболонин Иван Алексеевич"],
    ["cho", "Чуркина Наталия Анатольевна"],
    ["shol", "Штейнбах Ольга Валентиновна"],
    ["dov", "Диль Ольга Валерьевна"],
]);

const sub = new Map([
    ["ptg", "ПТГ"],
    ["it", "ИТ"],
    ["tc", "ТЦ"],
    ["ip", "ИПиОКМП"],
    ["sp", "Социология и право"],
    ["bl", "Blender"],
    ["gd", "Game design"],
    ["ps", "КОИиФ"],
]);

const t = new Map([
    ["l", "Лекция"],
    ["p", "Практика"],
    ["lr", "Лабараторная работа"],
]);

const t_slot = new Map([
    [1, "08:00"],
    [2, "09:50"],
    [3, "11:40"],
    [4, "13:45"],
    [5, "15:35"],
    [6, "17:25"],
]);

const ri02 = {
    key: "02",
    data:
    [
    {
        id: "2",
        scheduler: [
            {
                id: 0,
                day: "Понедельник",
                sch: [
                    {
                        id: 1,
                        time: t_slot.get(2),
                        sub: sub.get("tc"),
                        type: t.get("l"),
                        place: "210 (К.1)",
                        prepod: pre.get("ski"),
                    },
                    {
                        id: 2,
                        time: t_slot.get(3),
                        sub: sub.get("tc"),
                        type: t.get("lr"),
                        place: "309	(К.1)",
                        prepod: pre.get("ski"),
                    },
                    {
                        id: 3,
                        time: t_slot.get(4),
                        sub: sub.get("ip"),
                        type: t.get("lr"),
                        place: "300	(К.1)",
                        prepod: pre.get("oia"),
                    },
                ],
            },
            {
                id: 1,
                day: "Вторник",
                sch: [
                    {
                        id: 1,
                        time: t_slot.get(1),
                        sub: sub.get("ip"),
                        type: t.get("lr"),
                        place: "300	(К.1)",
                        prepod: pre.get("oia"),
                    },
                    {
                        id: 2,
                        time: t_slot.get(2),
                        sub: sub.get("it"),
                        type: t.get("lr"),
                        place: "309	(К.1)",
                        prepod: pre.get("3d1"),
                    },
                    {
                        id: 3,
                        time: t_slot.get(3),
                        sub: sub.get("it"),
                        type: t.get("l"),
                        place: "202 (К.1)",
                        prepod: pre.get("3d1"),
                    },
                    {
                        id: 4,
                        time: t_slot.get(4),
                        sub: sub.get("bl"),
                        type: t.get("lr"),
                        place: "471 (К.5)",
                        prepod: pre.get("sh_1"),
                    },
                ],
            },
            {
                id: 2,
                day: "Среда",
                sch: [
                    {
                        id: 1,
                        time: t_slot.get(2),
                        sub: sub.get("ip"),
                        type: t.get("l"),
                        place: "210	(К.1)",
                        prepod: pre.get("oia"),
                    },
                    {
                        id: 2,
                        time: t_slot.get(3),
                        sub: sub.get("ps"),
                        type: t.get("l"),
                        place: "210	(К.1)",
                        prepod: pre.get("ps0"),
                    },
                    {
                        id: 3,
                        time: t_slot.get(4),
                        sub: sub.get("ptg"),
                        type: t.get("lr"),
                        place: "309 (К.1)",
                        prepod: pre.get("h_anim"),
                    },
                ],
            },
            {
                id: 3,
                day: "Четверг",
                sch: [
                    {
                        id: 1,
                        time: "",
                        sub: "Выходной",
                        type: "",
                        place: "",
                        prepod: "",
                    },
                ],
            },
            {
                id: 4,
                day: "Пятница",
                sch: [
                    {
                        id: 1,
                        time: t_slot.get(3),
                        sub: sub.get("sp"),
                        type: t.get("p"),
                        place: "422	(К.1)",
                        prepod: pre.get("cho"),
                    },
                    {
                        id: 2,
                        time: t_slot.get(4),
                        sub: sub.get("ps"),
                        type: t.get("lr"),
                        place: "302	(К.1)",
                        prepod: pre.get("dov"),
                    },
                    {
                        id: 3,
                        time: t_slot.get(5),
                        sub: sub.get("gd"),
                        type: t.get("lr"),
                        place: "Киберполигон (К.5)",
                        prepod: pre.get("sh_2"),
                    },
                ],
            },
            ],
    },
    {
        id: "1",
        scheduler: [
        {
            id: 0,
            day: "Понедельник",
            sch: [
                {
                    id: 1,
                    time: t_slot.get(2),
                    sub: sub.get("ptg"),
                    type: t.get("l"),
                    place: "210 (К.1)",
                    prepod: pre.get("h_anim"),
                },
                {
                    id: 2,
                    time: t_slot.get(3),
                    sub: sub.get("tc"),
                    type: t.get("lr"),
                    place: "309	(К.1)",
                    prepod: pre.get("ski"),
                },
                {
                    id: 3,
                    time: t_slot.get(4),
                    sub: sub.get("ip"),
                    type: t.get("lr"),
                    place: "300	(К.1)",
                    prepod: pre.get("oia"),
                },
            ],
        },
        {
            id: 1,
            day: "Вторник",
            sch: [
                {
                    id: 1,
                    time: t_slot.get(1),
                    sub: sub.get("ip"),
                    type: t.get("lr"),
                    place: "300	(К.1)",
                    prepod: pre.get("oia"),
                },
                {
                    id: 2,
                    time: t_slot.get(2),
                    sub: sub.get("it"),
                    type: t.get("lr"),
                    place: "309	(К.1)",
                    prepod: pre.get("3d1"),
                },
                {
                    id: 3,
                    time: t_slot.get(3),
                    sub: sub.get("sp"),
                    type: t.get("l"),
                    place: "202 (К.1)",
                    prepod: pre.get("cho"),
                },
                {
                    id: 4,
                    time: t_slot.get(4),
                    sub: sub.get("bl"),
                    type: t.get("lr"),
                    place: "471 (К.5)",
                    prepod: pre.get("sh_1"),
                },
            ],
        },
        {
            id: 2,
            day: "Среда",
            sch: [
                {
                    id: 1,
                    time: t_slot.get(2),
                    sub: sub.get("gd"),
                    type: t.get("l"),
                    place: "210	(К.1)",
                    prepod: pre.get("sh_2"),
                },
                {
                    id: 2,
                    time: t_slot.get(3),
                    sub: sub.get("bl"),
                    type: t.get("l"),
                    place: "210	(К.1)",
                    prepod: pre.get("sh_1"),
                },
                {
                    id: 3,
                    time: t_slot.get(4),
                    sub: sub.get("ptg"),
                    type: t.get("lr"),
                    place: "309 (К.1)",
                    prepod: pre.get("h_anim"),
                },
            ],
        },
        {
            id: 3,
            day: "Четверг",
            sch: [
                {
                    id: 1,
                    time: "",
                    sub: "Выходной",
                    type: "",
                    place: "",
                    prepod: "",
                },
            ],
        },
        {
            id: 4,
            day: "Пятница",
            sch: [
                {
                    id: 1,
                    time: t_slot.get(4),
                    sub: sub.get("ps"),
                    type: t.get("lr"),
                    place: "302	(К.1)",
                    prepod: pre.get("dov"),
                },
                {
                    id: 2,
                    time: t_slot.get(5),
                    sub: sub.get("gd"),
                    type: t.get("lr"),
                    place: "Киберполигон (К.5)",
                    prepod: pre.get("sh_2"),
                },
            ],
        },
        ],
    },
    ],
    
};

const ri01 = {
    key: "01",
    scheduler_1: [
        {
            mon: [
                {
                    id: 2,
                    time: t_slot.get(3),
                    sub: sub.get("tc"),
                    type: t.get("lr"),
                    place: "309	(К.1)",
                    prepod: pre.get("ski"),
                },
                {
                    id: 1,
                    time: t_slot.get(2),
                    sub: sub.get("ptg"),
                    type: t.get("l"),
                    place: "210 (К.1)",
                    prepod: pre.get("h_anim"),
                },
                {
                    id: 3,
                    time: t_slot.get(4),
                    sub: sub.get("ip"),
                    type: t.get("lr"),
                    place: "300	(К.1)",
                    prepod: pre.get("oia"),
                },
            ],
        },
        {
            tue: [
                {
                    id: 2,
                    time: t_slot.get(2),
                    sub: sub.get("it"),
                    type: t.get("lr"),
                    place: "309	(К.1)",
                    prepod: pre.get("3d1"),
                },
                {
                    id: 1,
                    time: t_slot.get(1),
                    sub: sub.get("ip"),
                    type: t.get("lr"),
                    place: "300	(К.1)",
                    prepod: pre.get("oia"),
                },
                {
                    id: 4,
                    time: t_slot.get(4),
                    sub: sub.get("bl"),
                    type: t.get("lr"),
                    place: "471 (К.5)",
                    prepod: pre.get("sh_1"),
                },
                {
                    id: 3,
                    time: t_slot.get(3),
                    sub: sub.get("sp"),
                    type: t.get("l"),
                    place: "202 (К.1)",
                    prepod: pre.get("cho"),
                },
            ],
        },
    ],
};

export { ri01, ri02 };
