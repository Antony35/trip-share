<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{

    public function __construct(
        private UserPasswordHasherInterface $passwordHasher
    ) {}
        
    public function load(ObjectManager $manager): void
    {
        $user  = new User();

        $user->setPseudo('firstUser');
        $user->setEmail('basic-user@exemple.com');

        $hashedPassword = $this->passwordHasher->hashPassword(
            $user,
            'Test!este1'
        );

        $user->setPassword($hashedPassword);

        $manager->persist($user);
        $manager->flush();
    }
}
