﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;
using Web.Data.Context;

namespace Web.Data.Migrations
{
    [DbContext(typeof(OitChatSupportContext))]
    [Migration("20171017014317_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.0-rtm-26452")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Web.Models.Agent", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("BotHandle")
                        .IsRequired()
                        .HasMaxLength(30);

                    b.Property<bool>("Connected")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValue(false);

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<string>("UtsaId")
                        .IsRequired()
                        .HasMaxLength(30);

                    b.HasKey("Id")
                        .HasAnnotation("SqlServer:Clustered", true);

                    b.HasAlternateKey("UtsaId")
                        .HasAnnotation("SqlServer:Clustered", false);

                    b.ToTable("Agent");
                });

            modelBuilder.Entity("Web.Models.DirectLineThread", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("BotHandle")
                        .IsRequired()
                        .HasMaxLength(30);

                    b.Property<string>("ConversationId")
                        .IsRequired()
                        .HasMaxLength(30);

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<DateTime>("TimeCreated")
                        .HasColumnType("datetime2(7)");

                    b.HasKey("Id")
                        .HasAnnotation("SqlServer:Clustered", true);

                    b.HasAlternateKey("ConversationId")
                        .HasAnnotation("SqlServer:Clustered", false);

                    b.ToTable("DirectLineThread");
                });

            modelBuilder.Entity("Web.Models.EventLog", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Detail")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("EventType")
                        .IsRequired()
                        .HasMaxLength(30);

                    b.Property<bool>("Resolved")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValue(false);

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<DateTime>("Timestamp")
                        .HasColumnType("datetime2(7)");

                    b.HasKey("Id")
                        .HasAnnotation("SqlServer:Clustered", true);

                    b.ToTable("EventLog");
                });

            modelBuilder.Entity("Web.Models.GroupMessage", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Group")
                        .IsRequired()
                        .HasMaxLength(30);

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<string>("Sender")
                        .IsRequired()
                        .HasMaxLength(30);

                    b.Property<string>("Text")
                        .IsRequired()
                        .HasMaxLength(200);

                    b.Property<DateTime>("TimeSent")
                        .HasColumnType("datetime2(7)");

                    b.HasKey("Id")
                        .HasAnnotation("SqlServer:Clustered", true);

                    b.ToTable("GroupMessage");
                });

            modelBuilder.Entity("Web.Models.LiveRequest", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime?>("AcceptTime")
                        .HasColumnType("datetime2(7)");

                    b.Property<string>("AgentId")
                        .HasMaxLength(30);

                    b.Property<string>("BotHandle")
                        .IsRequired()
                        .HasMaxLength(30);

                    b.Property<string>("ConversationId")
                        .IsRequired()
                        .HasMaxLength(30);

                    b.Property<DateTime>("RequestTime")
                        .HasColumnType("datetime2(7)");

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("Id")
                        .HasAnnotation("SqlServer:Clustered", true);

                    b.ToTable("LiveRequest");
                });
#pragma warning restore 612, 618
        }
    }
}