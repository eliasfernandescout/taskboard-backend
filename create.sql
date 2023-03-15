drop table taskboard.card;
drop table taskboard.column;
drop table taskboard.board


create table taskboard.board(
    id_board serial primary key,
    name text
);

create table taskboard.column(
    id_column serial primary key,
    id_board integer references taskboard.board (id_board),
    name text,
    has_estimative boolean
);

create table taskboard.card(
    id_card serial primary key,
    id_column integer references taskboard.column (id_column),
    title text,
    estimative integer
);


insert into taskboard.board (id_board, name) values (1, 'Projeto 1');

insert into taskboard.column (id_column, id_board, name, has_estimative) values (1, 1, 'Coluna A', true);
insert into taskboard.column (id_column, id_board, name, has_estimative) values (2, 1, 'Coluna B', true);
insert into taskboard.column (id_column, id_board, name, has_estimative) values (3, 1, 'Coluna C', true);

insert into taskboard.card (id_card, id_column, title, estimative ) values (1, 1, 'Atividade 1', 3);
insert into taskboard.card (id_card, id_column, title, estimative ) values (2, 1, 'Atividade 2', 2);
insert into taskboard.card (id_card, id_column, title, estimative ) values (3, 1, 'Atividade 3', 1);